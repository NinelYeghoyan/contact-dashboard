import type { FieldApi } from '@tanstack/react-form';

export function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-xs text-red mt-0.5">
          {field.state.meta.errors.join(',')}
        </em>
      ) : null}
    </>
  );
}
