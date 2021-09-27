import React from 'react'

export default function Alert(props) {
    
    return (
        // props.alert && mtlb ki agr props.alert false hota hai to hi aale evulate hoga , agar fail hai to evalute nhi hoga aage .
        props.alert && <div className="alert alert-success alert-dismissible fade show my-2" role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    )
}
