import {
  Button,
  Input,
  Notification,
  PageHeader,
  Textarea,
} from '@components/index.ts';
import {
  createUser,
  editUser,
  FieldInfo,
  ImageUpload,
  type UserDataType,
  userSchema,
} from '@features/user';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type FormWrapperProps = {
  isEditMode?: boolean;
  userData?: UserDataType;
};

const FormAction: FC<FormWrapperProps> = ({ isEditMode = false, userData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [resetImageUpload, setResetImageUpload] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  }>({
    message: '',
    type: 'success',
  });

  const defaultValues = isEditMode
    ? {
        id: userData?.id ?? '',
        name: userData?.name ?? '',
        username: userData?.username ?? '',
        image: userData?.image ?? '',
        description: userData?.description ?? '',
      }
    : {
        name: '',
        username: '',
        image: '',
        description: '',
      };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, message: '' }));
    }, 2000);
  };

  const userMutation = useMutation({
    mutationFn: isEditMode ? editUser : createUser,
    onSuccess: (newUser) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });

      showNotification(
        isEditMode
          ? 'editUserSuccessfullyMessage'
          : 'newUserSuccessfullyMessage',
        'success',
      );

      setTimeout(() => {
        queryClient.refetchQueries({ queryKey: ['user'] });
        queryClient.setQueryData(['selectedUserId'], newUser.id);
        navigate({ to: '/$userId', params: { userId: newUser.id } });
      }, 2000);

      if (!isEditMode) {
        form.reset();
        setResetImageUpload((prev) => !prev);
      }
    },
    onError: () => {
      showNotification(
        isEditMode ? 'editUserErrorMessage' : 'newUserErrorMessage',
        'error',
      );
    },
  });

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      userMutation.mutate(value);
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <>
      <PageHeader
        title={isEditMode ? 'editUser' : 'newUser'}
        buttonText="home"
        path="/"
      />

      <div className="max-w-[1140px] min-h-[610px] border border-secondary rounded-[20px] mt-7 py-[52px] px-[54px]">
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="w-[396px]"
        >
          <form.Field
            name="name"
            children={(field) => {
              return (
                <>
                  <Input
                    id={field.name}
                    type="text"
                    name={field.name}
                    placeholder={t('name')}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  <FieldInfo field={field} />
                </>
              );
            }}
          />

          <form.Field
            name="username"
            children={(field) => (
              <>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  placeholder={t('userName')}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-4"
                />
                <FieldInfo field={field} />
              </>
            )}
          />

          <form.Field
            name="image"
            children={(field) => (
              <>
                <ImageUpload
                  reset={resetImageUpload}
                  onImageChange={(image) => field.handleChange(image)}
                  className="mt-4"
                />

                <FieldInfo field={field} />
              </>
            )}
          />

          <form.Field
            name="description"
            children={(field) => (
              <>
                <Textarea
                  id={field.name}
                  name={field.name}
                  placeholder={t('description')}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-4"
                />

                <FieldInfo field={field} />
              </>
            )}
          />

          <form.Subscribe
            selector={(state) => [state.canSubmit]}
            children={([canSubmit]) => (
              <Button
                type="submit"
                variant={canSubmit ? 'primary' : 'disable'}
                className="w-full mt-5"
              >
                {t('submit')}
              </Button>
            )}
          />
        </form>

        {notification.message && (
          <Notification text={notification.message} type={notification.type} />
        )}
      </div>
    </>
  );
};

export default FormAction;
