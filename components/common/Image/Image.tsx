import NextImage from "next/image";

interface CustomLoaderProps {
  src: string;
}

const customLoader = ({ src }: CustomLoaderProps) => {
  return src
}

export function Image(props: any) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
      unoptimized={true}
    />
  );
}
