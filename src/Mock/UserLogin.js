export const data = `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">` +
  ` <s:Header>` +
      `<a:Action s:mustUnderstand="1">http://Zurich.at/Services/Web/KundenportalLib/IAuthentication/UserLoginResponse</a:Action> ` +
   `</s:Header>` +
  ` <s:Body>` +
      `<UserLoginResponse xmlns="http://Zurich.at/Services/Web/KundenportalLib">`+
        ` <UserLoginResult xmlns:b="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.KundenportalLib" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">` +
           ` <b:BetreuerTyp>IMAS</b:BetreuerTyp>` +
           ` <b:Continue i:nil="true"/>` +
           ` <b:EMailAddress>christian.zalek@at.zurich.com</b:EMailAddress>`+
            `<b:FirstLogin>2013-02-09T20:56:21.59</b:FirstLogin>`+
           ` <b:KundenNr>3050846</b:KundenNr>` +
           ` <b:LastLogin>2020-02-11T16:01:47.702</b:LastLogin>`+
            `<b:Message i:nil="true"/>`+
           ` <b:Name>Christian Zalek</b:Name>`+
           ` <b:NewEMailAddress/>`+
           ` <b:Success>true</b:Success>`+
           ` <b:Type>Default</b:Type>`+
        ` </UserLoginResult>`+
     ` </UserLoginResponse>`+
  ` </s:Body>`+
`</s:Envelope>`;

const convert = require('xml-js');
const xml = data;
const options = {ignoreComment: true, alwaysChildren: true, compact: true, spaces: 4};
export const UserLoginResp = convert.xml2js(xml, options);