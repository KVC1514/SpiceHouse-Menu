import React from "react";
import NavBar from "../../src/components/fileUpload1/NavBar";
import AppLayout from "../../src/ui/AppLayout";
import AddEditUser from "../../src/components/fileUpload1/pages/AddEditUser";

function FileUpload() {
  return (
    <AppLayout>
      <div>
        <NavBar />
        <AddEditUser />
      </div>
    </AppLayout>
  );
}

export default FileUpload;
