export const GetSchadenResp = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">'+
   '<s:Header>'+
      '<a:Action s:mustUnderstand="1">http://Zurich.at/Services/Web/Schaden/ISchaden/GetSchadenResponse</a:Action>'+
   '</s:Header>'+
   '<s:Body>'+
      '<GetSchadenResponse xmlns="http://Zurich.at/Services/Web/Schaden">'+
         '<GetSchadenResult xmlns:b="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.SchadenServices" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">'+
            '<b:Deckungsstat i:nil="true"/>'+
            '<b:DocKey i:nil="true"/>'+
            '<b:EreignisDatum>2013-06-15T00:00:00</b:EreignisDatum>'+
            '<b:EreignisDatumAnzeige>6/15/2013</b:EreignisDatumAnzeige>'+
            '<b:Information i:nil="true"/>'+
            '<b:PolizzenNr>042179736</b:PolizzenNr>'+
            '<b:ProduktBez>Fahrzeug-Versicherung</b:ProduktBez>'+
            '<b:Referent>Service Center Leistung</b:Referent>'+
            '<b:SchadenNr>0421797360001</b:SchadenNr>'+
            '<b:SchadenNrAnzeige>0421797360001</b:SchadenNrAnzeige>'+
            '<b:SchadenStatus>Erledigt</b:SchadenStatus>'+
            '<b:Schadenbezeichnung>Kasko-Schaden</b:Schadenbezeichnung>'+
            '<b:SpartenTyp>Auto</b:SpartenTyp>'+
            '<b:Spartentxt>Kasko</b:Spartentxt>'+
            '<b:Zahlungen>1209.47000</b:Zahlungen>'+
            '<b:Adresse>Schwarzenbergplatz 15, 1010 Wien</b:Adresse>'+
            '<b:AktuellerStatus i:nil="true" xmlns:c="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.SchadenTracking"/>'+
            '<b:BearbeitungErledigt>false</b:BearbeitungErledigt>'+
            '<b:BearbeitungItems i:nil="true" xmlns:c="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.SchadenTracking"/>'+
            '<b:Dokumente i:nil="true" xmlns:c="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.Common.IO"/>'+
            '<b:ErfassungErledigt>false</b:ErfassungErledigt>'+
            '<b:ErfassungItems i:nil="true" xmlns:c="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.SchadenTracking"/>'+
            '<b:ErledigungErledigt>false</b:ErledigungErledigt>'+
            '<b:ErledigungItems i:nil="true" xmlns:c="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.SchadenTracking"/>'+
            '<b:KommLink>false</b:KommLink>'+
            '<b:KorrSch1 i:nil="true"/>'+
            '<b:KorrSch1_Bez i:nil="true"/>'+
            '<b:KorrSch2 i:nil="true"/>'+
            '<b:KorrSch2_Bez i:nil="true"/>'+
            '<b:KorrSch3 i:nil="true"/>'+
            '<b:KorrSch3_Bez i:nil="true"/>'+
            '<b:Korrespondenz xmlns:c="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.Common.DataContracts">'+
               '<c:MessageListItem>'+
                  '<c:Anhang>true</c:Anhang>'+
                  '<c:Datum>2013-11-29T19:00:13.802</c:Datum>'+
                  '<c:Id>ADR01DEY</c:Id>'+
                  '<c:Neu>false</c:Neu>'+
                  '<c:Titel>Informationen zur Schadennummer 421797360001</c:Titel>'+
               '</c:MessageListItem>'+
            '</b:Korrespondenz>'+
            '<b:Telefon>+43 (0)50 1255-6028</b:Telefon>'+
         '</GetSchadenResult>'+
      '</GetSchadenResponse>'+
   '</s:Body>'+
'</s:Envelope>';

const convert = require('xml-js'); 
const options = {ignoreComment: true, alwaysChildren: true};

export const GetSchaden = convert.xml2js(GetSchadenResp, options);