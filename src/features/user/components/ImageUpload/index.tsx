import IconImage from '@assets/icons/Image.tsx';
import type { ChangeEvent, FC } from 'react';
import { useEffect } from 'react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ImageUploadProps = {
  className?: string;
  reset?: boolean;
  onImageChange: (imageUrl: string) => void;
};

const ImageUpload: FC<ImageUploadProps> = memo(
  ({ className = '', reset, onImageChange }) => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | undefined>();

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        onImageChange(imageUrl);
      }
    };

    useEffect(() => {
      if (reset) {
        setSelectedImage(undefined);
      }
    }, [reset]);

    return (
      <div className={className}>
        {!selectedImage && (
          <div className="relative">
            <div className="flex items-center relative w-full h-9 pl-5 cursor-pointer border border-accent rounded-md bg-secondary text-accent overflow-hidden">
              <IconImage />
              <span className="ml-2.5 text-sm">{t('photo')}</span>
              <input
                className="absolute top-0 right-0 h-full w-full opacity-0 cursor-pointer"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        )}
        {selectedImage && (
          <div className="w-[100px] h-[100px] overflow-hidden rounded-xl bg-gray-600">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full object-cover"
            />
          </div>
        )}
      </div>
    );
  },
);

export default ImageUpload;
