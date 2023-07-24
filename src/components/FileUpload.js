import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEventHistoryFields, addImageUrl } from '../redux/slices/createEventHistorySlice';

export const useFileUpload = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const dispatch = useDispatch()

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e?.target?.files[0];
    const fileSizeKiloBytes = file?.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*Image size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data?.append("file", e?.target?.files[0]);
      data?.append("upload_preset", "kingCabana");
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const backgroundPicture = await response.json();
        if (backgroundPicture.secure_url) {
          setFile(backgroundPicture.secure_url);
          setLoading(false);
        
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("**ERROR UPLOADING IMAGE!**");
        return null;
      }
    }
  };

  useEffect(() => {
    if (!file) {
      setErrorMsg("*Please choose an image*");
      setIsSuccess(false);
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
  }, [file]);

  return {
    handleFileChange,
    errorMsg,
    isSuccess,
    loading,
    file,
  };
};




 