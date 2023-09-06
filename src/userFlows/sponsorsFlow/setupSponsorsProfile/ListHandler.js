import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { KBTextXs } from "../../../components/fonts/Fonts";
import { Input, InputText } from "../../createEvent/FirstCreateEventStyled";
import { AddButton, Delete, ErrorText, InputTagBox } from "../../createEvent/TimeLineEventsStyled";
import { SponsorTags, SponsorTagsWrapper } from "./SetupSponsorsProfileStyled";

const ListHandler = ({ items, setItems, maxItems, placeholder, label, description }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue?.trim() !== "" && items?.length < maxItems) {
      setItems([...items, inputValue?.trim()]);
      setInputValue("");
    }
  };
  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddItem();
    }
  };
  const handleRemoveItem = (itemToRemove) => {
    setItems(items?.filter((item) => item !== itemToRemove));
  };

  const errorText = `*${items?.length}/${maxItems} Tags`;

  return (
    <>
      <div>
        <InputText>{label}</InputText>
        <section style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <KBTextXs>{description}</KBTextXs>
          <ErrorText style={{margin: "0rem"}}>{errorText}</ErrorText>
        </section>
      </div>
      <InputTagBox>
        <Input
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleInputKeyPress}
        />
        <AddButton style={{marginRight: "0rem"}} type="button" onClick={handleAddItem}>
          Add
        </AddButton>
      </InputTagBox>
      <SponsorTagsWrapper>
        {items?.map((item, index) => (
          <div key={index}>
            <SponsorTags >
              {item}
              <Delete onClick={() => handleRemoveItem(item)}>
                <AiOutlineClose color="#ff2957"/>
              </Delete>
            </SponsorTags>
          </div>
        ))}
      </SponsorTagsWrapper>
    </>
  );
};

export default ListHandler;
