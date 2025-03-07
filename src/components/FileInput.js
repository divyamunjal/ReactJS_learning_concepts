import React, { useState } from 'react'

const FileInput = () => {
    const [file,setFile] = useState(null);

    const handleInput = (e) => {
        debugger;
        setFile(e.target.files[0])
    }
  return (
    <div className="container mt-5">
        <h1 className="text-primary">Upload File</h1>
        <br />
        <div>
            <input type="file" accept='image/' onChange={handleInput}/>
            {file && <img src={URL.createObjectURL(file)} />}
        </div>
    </div>
  )
}

export default FileInput
