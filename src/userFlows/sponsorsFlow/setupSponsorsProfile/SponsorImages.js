import { useEffect } from "react";
import { useFileUpload } from "../../../components/FileUpload";
import { CustomWrapper, FileWrapper, FormContainer, InputText, Supported, UploadBtn } from "../../createEvent/FirstCreateEventStyled"

const SponsorImages = ({ state, setState }) => {
//   const handleFileChange = async (e) => {
//     const MAX_FILE_SIZE = 1024; // 1MB
//     const file = e.target.files[0];
//     const fileSizeKiloBytes = file?.size / 1024;

//     if (fileSizeKiloBytes > MAX_FILE_SIZE) {
//       setErrorMsg("*File size is greater than 1mb*");
//       setIsSuccess(false);
//       return;
//     } else {
//       const data = new FormData();
//       data.append("file", e.target.files[0]);
//       data.append("upload_preset", "kingCabana");
//       setBannerLoading(true);
//       setIsSuccess(false);
//       setSelectedFile(null);
//       try {
//         const response = await axios.post(
//           "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
//           data
//         );
//         const uploadedBanner = response.data;
//         // console.log(uploadedBanner.secure_url);
//         if (uploadedBanner.secure_url) {
//           setFile(uploadedBanner.secure_url);
//           setBannerLoading(false);
//           setState((prevState)=>({
//               ...prevState,
//               bannerUrl: uploadedBanner.secure_url,
//             }));
//           console.log(state);
//         }
//       } catch (error) {
//         setBannerLoading(false);
//         setErrorMsg("**ERROR UPLOADING FILE!**");
//         console.log(error);
//       }
//     }
//     setSelectedFile(e.target.files[0]);
//     localStorage.setItem("banner", e.target.files[0].name);
//   };
//   useEffect(() => {
//     const bannerData = localStorage.getItem("banner");
//     if (bannerData) {
//       setSelectedFile({ name: bannerData });
//     }
//   }, []);

  const {
    handleFileChange: handleFileChange1,
    errorMsg: errorMsg1,
    isSuccess: isSuccess1,
    loading: loading1,
    file: file1
  } = useFileUpload();
  const {
    handleFileChange: handleFileChange2,
    errorMsg: errorMsg2,
    isSuccess: isSuccess2,
    loading: loading2,
    file: file2
  } = useFileUpload();

  useEffect(() => {
    if (file1) {
      setState((prevState)=>({
          ...prevState,
          backgroundPictureUrl : file1,
        }));
      console.log(state);
    }
  }, [ file1 ])
  useEffect(() => {
    if (file2) {
      setState((prevState)=>({
          ...prevState,
          logoUrl : file2,
        }));
      console.log(state);
    }
  }, [ file2 ])
  return (
    <section>
      <div style={{margin: "1rem 0rem"}}>
      <InputText style={{margin: "3rem 0rem"}}>Background Image</InputText>
         <FormContainer>
           <FileWrapper style={{ width: "100%" }}>
             <CustomWrapper>
               <input
                 type="file"
                 style={{ cursor: "pointer" }}
                 onChange={handleFileChange1}
                 hidden
                 id="file1"
                 accept="image/png, image/jpeg, image/jpg"
                 name="backgroundPictureUrl"
                 defaultValue={file1}
               />
             </CustomWrapper>
             <UploadBtn style={{ width: "100px" }} htmlFor="file1">
               Upload
             </UploadBtn>
           </FileWrapper>
           <h3
             style={{
               color: "#ff2957",
               fontSize: "16px",
               justifyContent: "center",
               display: "flex",
               marginTop: "0.5rem",
             }}
           >
             {errorMsg1}
           </h3>
           <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
           <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
             Not more than 1mb
           </Supported>
           {isSuccess1 ? (
         <div
           style={{
             padding: "1rem",
             display: "flex",
             justifyContent: "flex-end",
             alignItems: "center",
           }}
         >
           <p style={{ color: "green", marginRight: "1rem" }}>
             Validation successful
           </p>
           <img
             src={file1}
             style={{ width: "50px", height: "50px" }}
             alt=""
           />
         </div>
        ) : null}
           {loading1 ? (
             <h4
               style={{ display: "flex", justifyContent: "flex-end" }}
             >
               Loading...
             </h4>
           ) : null}
        </FormContainer>
        </div>

      <div style={{margin: "1rem 0rem"}}>
       <InputText >Logo or Profile Image</InputText>
       <FormContainer>
         <FileWrapper style={{ width: "100%" }}>
           <CustomWrapper>
             <input
               type="file"
               style={{ cursor: "pointer" }}
               onChange={handleFileChange2}
               hidden
               id="file2"
               accept="image/png, image/jpeg, image/jpg"
               name="logoUrl"
               defaultValue={file2}
             />
           </CustomWrapper>
           <UploadBtn style={{ width: "100px" }} htmlFor="file2">
             Upload
           </UploadBtn>
         </FileWrapper>
         <h3
           style={{
             color: "#ff2957",
             fontSize: "16px",
             justifyContent: "center",
             display: "flex",
             marginTop: "0.5rem",
           }}
         >
           {errorMsg2}
         </h3>
         <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
         <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
           Not more than 1mb
         </Supported>
         {isSuccess2 ? (
       <div
         style={{
           padding: "1rem",
           display: "flex",
           justifyContent: "flex-end",
           alignItems: "center",
         }}
       >
         <p style={{ color: "green", marginRight: "1rem" }}>
           Validation successful
         </p>
         <img
           src={file2}
           style={{ width: "50px", height: "50px" }}
           alt=""
         />
       </div>
      ) : null}
         {loading2 ? (
           <h4
             style={{ display: "flex", justifyContent: "flex-end" }}
           >
             Loading...
           </h4>
         ) : null}
       </FormContainer>
       </div>
    </section>
  )
};

export default SponsorImages;