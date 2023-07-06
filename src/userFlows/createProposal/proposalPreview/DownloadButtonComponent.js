import React from "react";
import PropTypes from "prop-types";

const DownloadButtonComponent = ({ contentData, onDownloadPDF }) => {
  return (
    <button onClick={() => onDownloadPDF(contentData)}>Download PDF</button>
  );
};

DownloadButtonComponent.propTypes = {
  contentData: PropTypes.string.isRequired,
  onDownloadPDF: PropTypes.func.isRequired,
};

export default DownloadButtonComponent;
