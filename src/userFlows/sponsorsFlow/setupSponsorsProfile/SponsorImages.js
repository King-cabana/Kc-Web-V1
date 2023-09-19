import { useEffect } from "react";
import { useFileUpload } from "../../../components/FileUpload";
import { CustomWrapper, FileWrapper, FormContainer, InputText, Supported, UploadBtn } from "../../createEvent/FirstCreateEventStyled"

const SponsorImages = ({ state, setState }) => {
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