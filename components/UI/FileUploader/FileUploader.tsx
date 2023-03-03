import {FormEvent, useRef, useState} from "react";

export const FileUploader = () => {

    const fileInput = useRef<HTMLInputElement>(null)

    const [fileName, setFileName] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const path = fileInput.current?.value.split('\\')
        const name = path![path!.length - 1]
        console.log(name)
        setFileName(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" ref={fileInput}/>
                <button type="submit">Submit</button>
            </form>
            <div>{fileName}</div>
        </div>
    )
}