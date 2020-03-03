export const data =
`<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">` +
`<s:Header>`+
   `<a:Action s:mustUnderstand="1">http://Zurich.at/Services/Web/Schaden/ISchaden/GetSchadenListeResponse</a:Action>`+
`</s:Header>`+
`<s:Body>`+
   `<GetSchadenListeResponse xmlns="http://Zurich.at/Services/Web/Schaden">`+
     ` <GetSchadenListeResult xmlns:b="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.SchadenServices" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">`+
         `<b:SchadenOverviewItem>`+
            `<b:Deckungsstat i:nil="true"/>`+
            `<b:DocKey i:nil="true"/>`+
            `<b:EreignisDatum>2013-06-15T00:00:00</b:EreignisDatum>`+
            `<b:EreignisDatumAnzeige>6/15/2013</b:EreignisDatumAnzeige>`+
            `<b:Information i:nil="true"/>`+
            `<b:PolizzenNr>042179736</b:PolizzenNr>`+
            `<b:ProduktBez>Fahrzeug-Versicherung</b:ProduktBez>`+
            `<b:Referent>Service Center Leistung</b:Referent>`+
            `<b:SchadenNr>0421797360001</b:SchadenNr>`+
            `<b:SchadenNrAnzeige>0421797360001</b:SchadenNrAnzeige>`+
            `<b:SchadenStatus>Erledigt</b:SchadenStatus>`+
            `<b:Schadenbezeichnung>Kasko-Schaden</b:Schadenbezeichnung>`+
            `<b:SpartenTyp>Auto</b:SpartenTyp>`+
            `<b:Spartentxt>Kasko</b:Spartentxt>`+
            `<b:Zahlungen>1209.47000</b:Zahlungen>`+
         `</b:SchadenOverviewItem>`+
      `</GetSchadenListeResult>`+
   `</GetSchadenListeResponse>`+
`</s:Body>`+
`</s:Envelope>`;
const  convert = require('xml-js');
const xml = data;
const options = {ignoreComment: true, alwaysChildren: true};
export const GetSchadenListeResponse = convert.xml2js(xml, options);
