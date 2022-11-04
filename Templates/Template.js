exports.Template = (name, email, phone, message) => {

 const template =   `
    <div>
        <h1>{name}</h1>
        <ul>
            <li>{email}</li>
            <li>{phone}</li>
        </ul>
            <p>{message}</p>
    </div>
`
return template
}
