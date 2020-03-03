export const GetVertraegeOverviewResponse = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">' +
'<s:Header>' +
   '<a:Action s:mustUnderstand="1">http://Zurich.at/Services/Web/Vertrag/IVertrag/GetVertraegeOverviewResponse</a:Action>' +
'</s:Header>' +
'<s:Body>'+
   '<GetVertraegeOverviewResponse xmlns="http://Zurich.at/Services/Web/Vertrag">'+
      '<GetVertraegeOverviewResult xmlns:b="http://schemas.datacontract.org/2004/07/Zurich.at.Services.Web.Vertrag" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">'+
         '<b:VertragItemOverview>'+
            '<b:DetailProduktbezeichnung/>'+
            '<b:Polizzennummer>253197498</b:Polizzennummer>'+
            '<b:Produktbezeichnung>Zurich Versicherungspaket für Privatkunden</b:Produktbezeichnung>'+
            '<b:Status>Aktiv</b:Status>'+
            '<b:Typ>Haus</b:Typ>'+
            '<b:VersichertIst>Schaumannstraße 38 / 2, A-2100 Korneuburg</b:VersichertIst>'+
            '<b:Vertragsablauf i:nil="true"/>'+
            '<b:Vertragsbeginn>2018-05-03T00:00:00</b:Vertragsbeginn>'+
            '<b:Vertragsende i:nil="true"/>'+
         '</b:VertragItemOverview>'+
         '<b:VertragItemOverview>'+
            '<b:DetailProduktbezeichnung/>'+
            '<b:Polizzennummer>042179736</b:Polizzennummer>'+
            '<b:Produktbezeichnung>Fahrzeug-Versicherung</b:Produktbezeichnung>'+
            '<b:Status>Aktiv</b:Status>'+
            '<b:Typ>KFZ</b:Typ>'+
            "<b:VersichertIst>Personenkraftwagen KIA CEE'D - KO-318FT</b:VersichertIst>"+
            '<b:Vertragsablauf i:nil="true"/>'+
            '<b:Vertragsbeginn>2014-12-11T00:00:00</b:Vertragsbeginn>'+
            '<b:Vertragsende i:nil="true"/>'+
         '</b:VertragItemOverview>'+
      '</GetVertraegeOverviewResult>'+
   '</GetVertraegeOverviewResponse>'+
'</s:Body>'+
'</s:Envelope>';

const convert = require('xml-js'); 
const options = {ignoreComment: true, alwaysChildren: true};

export const GetVertraegeOverview = convert.xml2js(GetVertraegeOverviewResponse, options);