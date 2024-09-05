import imageForm from "../../../public/form-image.webp";

function ImageForm() {
  return (
    <div>
      <img src={imageForm} className="w-full h-auto " alt="From Image" />
    </div>
  );
}

export default ImageForm;
