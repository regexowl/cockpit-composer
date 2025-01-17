export default (props) => {
  if (props?.image?.isUpload) {
    switch (props?.image?.type) {
      case "ami":
        return "aws-auth";
      case "oci":
        return "oci-auth";
      case "vhd":
        return "azure-auth";
      case "vmdk":
        return "vmware-auth";
      default:
        return "review";
    }
    // check if image type is an ostree-settings
  } else if (
    [
      "iot-commit",
      "edge-commit",
      "edge-container",
      "edge-installer",
      "edge-raw-image",
      "edge-simplified-installer",
    ].includes(props?.image?.type)
  ) {
    return "ostree-settings";
  } else {
    return "review";
  }
};
