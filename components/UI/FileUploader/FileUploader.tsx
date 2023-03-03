import {FormEvent, useRef, useState} from "react";

export const FileUploader = () => {

    const fileInput = useRef<HTMLInputElement>(null)

    const [fileName, setFileName] = useState("")

    const [image, setImage] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const name = fileInput.current?.files![0].name
        console.log(name)
        setFileName(name+'')

        if(name?.endsWith('.png') || name?.endsWith('.jpg')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setImage(e.target?.result+'')
            }
            reader.readAsDataURL(fileInput.current!.files![0])
        }

        console.log(fileInput.current?.files)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" ref={fileInput}/>
                <button type="submit">Submit</button>
            </form>
            <div>{fileName}</div>
            {image ? <img src={image} width="500"/> : null}
        </div>
    )
}