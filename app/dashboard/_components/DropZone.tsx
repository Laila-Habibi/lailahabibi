import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface File {
  name: string;
  size: number;
}

const DropZone: React.FC = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      setAcceptedFiles(
        files.map((file) => ({
          name: file.name,
          size: file.size,
        }))
      );
    },
  });

  const fileList = acceptedFiles.map((file, index) => (
    <li key={index}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{fileList}</ul>
      </aside>
    </section>
  );
};

export default DropZone;