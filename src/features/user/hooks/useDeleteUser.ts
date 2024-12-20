import { deleteUser } from '@features/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.refetchQueries({ queryKey: ['user'] });
      navigate({ to: '/' });
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
    },
  });
};
