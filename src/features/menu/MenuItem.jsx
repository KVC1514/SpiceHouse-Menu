import { createRef } from "react";

function MenuItem() {
  const fileInput = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if a file is selected
    if (fileInput.current.files.length === 0) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.set("files", fileInput.current.value);

    try {
      const response = await fetch("/profile", {
        method: "POST",
        body: formData,
      });

      const parsedResponse = await response.json();

      if (response.ok) {
        // Use the parsed data here
        alert(parsedResponse.message); // Display a message from the server
      } else {
        console.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle errors
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="file" name="files" ref={fileInput} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default MenuItem;
