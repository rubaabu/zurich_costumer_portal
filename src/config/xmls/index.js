const AuthenticationUser = (user, password) => {
    return (
        `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:kun="http://Zurich.at/Services/Web/KundenportalLib" xmlns:zur="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.Common.DataContracts">\
            <soap:Header/>\
            <soap:Body>\
                <kun:UserLogin>\
                    <kun:credentials>\
                        <zur:Password>${password}</zur:Password>\
                        <zur:Username>${user}</zur:Username>\
                    </kun:credentials>\
                </kun:UserLogin>\
            </soap:Body>\
        </soap:Envelope>`
    )
}
export default AuthenticationUser;