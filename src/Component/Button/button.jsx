

function Button(props){

    const {onSubmit, text} = props

    return(
        <button onClick={onSubmit} className="btn btn-primary w-100" type="submit">{text}</button>
    )
}

export default Button;