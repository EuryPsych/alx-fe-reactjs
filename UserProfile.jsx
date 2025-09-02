function UserProfile(props) {
    return (
        <div style={{ 
            border: '2px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            margin: '15px 0',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                color: 'navy', 
                marginBottom: '10px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '5px'
            }}>{props.name}</h2>
            <p style={{ 
                margin: '5px 0',
                fontSize: '16px'
            }}>
                Age: <span style={{ 
                    fontWeight: 'bold', 
                    color: 'darkgreen'
                }}>{props.age}</span>
            </p>
            <p style={{ 
                margin: '5px 0',
                fontSize: '16px',
                fontStyle: 'italic'
            }}>
                Bio: {props.bio}
            </p>
        </div>
    );
}

export default UserProfile;