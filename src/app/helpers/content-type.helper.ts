class MimeType {
    public static Text_Plain: string = 'text/plain';
    public static Text_Css: string = 'text/css';
    public static Text_Html: string = 'text/html';
    public static Image_Jpeg: string = 'image/jpeg';
    public static Image_Png: string = 'image/png';
    public static Image_Bmp: string = 'image/bmp';
    public static Image_Gif: string = 'image/gif';
    public static Image_Icon: string = 'image/x-icon';
    public static Image_Svg: string = 'image/svg+xml';
    public static Image_Tiff: string = 'image/tiff';
    public static Audio_Mpeg: string = 'audio/mpeg';
    public static Audio_Ogg: string = 'audio/ogg';
    public static Audio_All: string = 'audio/*';
    public static Audio_Wave: string = 'audio/wave';
    public static Audio_Wav: string = 'audio/wav';
    public static Audio_M4a: string = 'audio/m4a';
    public static Video_Mp4: string = 'video/mp4';
    public static Video_X_MsVideo: string = 'video/x-msvideo';
    public static Video_QuickTime: string = 'video/quicktime';
    public static Video_X_Sgi_Movie: string = 'video/x-sgi-movie';
    public static Application_All: string = 'application/*';
    public static Application_Json: string = 'application/json';
    public static Application_X_Www_Form_UrlEncoded: string = 'application/x-www-form-urlencoded';
    public static Application_Javascript: string = 'application/javascript';
    public static Application_Ecmascript: string = 'application/ecmascript';
    public static Application_Octet_Stream: string = 'application/octet-stream';
    public static Application_Vnd_OpenXmlFormats_OfficeDocument_WordProcessing_Document: string = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    public static Application_MsWord: string = 'application/msword';
    public static Application_Vnd_OpenXmlFormats_OfficeDocument_Spreadsheetml_Sheet: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    public static Application_Vnd_Ms_Excel: string = 'application/vnd.ms-excel';
    public static Application_Vnd_OpenXmlFormats_OfficeDocument_Presentationml_Presentation: string = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    public static Application_Vnd_Ms_PowerPoint: string = 'application/vnd.ms-powerpoint';
    public static Application_Pdf: string = 'application/pdf';
    public static Application_Vnd_Ms_Outlook: string = 'application/vnd.ms-outlook';
    public static Message_Rfc822: string = 'message/rfc822';
    public static Application_Xml: string = 'application/xml';
    public static Multipart_Mixed: string = 'multipart/mixed';
    public static Application_Vnd_Hrmc: string = 'application/vnd.hmrc.1.0+json';
}
class Extensions {
    public static Docx: string = '.docx';
    public static Pdf: string = '.pdf';
    public static Xlsx: string = '.xlsx';
    public static Pptx: string = '.pptx';
    public static Html: string = '.html';
    public static Htm: string = '.htm';
    public static Mov: string = '.mov';
    public static Jpeg: string = '.jpeg';
    public static Jpg: string = '.jpg';
    public static Ico: string = '.ico';
    public static Avi: string = '.avi';
    public static Bmp: string = '.bmp';
    public static Msg: string = '.msg';
    public static eml: string = '.eml';
    public static Mp3: string = '.mp3';
    public static Mp4: string = '.mp4';
    public static Tif: string = '.tif';
    public static Tiff: string = '.tiff';
    public static Png: string = '.png';
    public static Wav: string = '.wav';
    public static Gif: string = '.gif';
    public static Xml: string = '.xml';
    public static Txt: string = '.txt';
    public static Csv: string = '.csv';
    public static Rtf: string = '.rtf';

    public static M4a: string = '.m4a';
    public static Doc: string = '.doc';
    public static Ppt: string = '.ppt';
    public static Xls: string = '.xls';
}
export class ContentTypeHelper {

    //#region Private static Variables

    //#endregion

    //#region Public static Methods
    public static ContentType(extension: string): string {
        let contentString: string = '';
        if (!extension.includes('.')) {
            extension = '.' + extension;
        }
        switch (extension.toLowerCase()) {
            case Extensions.Jpeg:
            case Extensions.Jpg:
                contentString = MimeType.Image_Jpeg;
                break;
            case Extensions.Gif:
                contentString = MimeType.Image_Gif;
                break;
            case Extensions.Png:
                contentString = MimeType.Image_Png;
                break;
            case Extensions.Bmp:
                contentString = MimeType.Image_Bmp;
                break;
            case Extensions.Ico:
                contentString = MimeType.Image_Icon;
                break;
            case Extensions.Rtf:
            case Extensions.Docx:
                contentString = MimeType.Application_Vnd_OpenXmlFormats_OfficeDocument_WordProcessing_Document;
                break;
            case Extensions.Doc:
                contentString = MimeType.Application_MsWord;
                break;
            case Extensions.Pdf:
                contentString = MimeType.Application_Pdf;
                break;
            case Extensions.Xlsx:
                contentString = MimeType.Application_Vnd_OpenXmlFormats_OfficeDocument_Spreadsheetml_Sheet;
                break;
            case Extensions.Csv:
            case Extensions.Xls:
                contentString = MimeType.Application_Vnd_Ms_Excel;
                break;
            case Extensions.Pptx:
                contentString = MimeType.Application_Vnd_OpenXmlFormats_OfficeDocument_Presentationml_Presentation;
                break;
            case Extensions.Ppt:
                contentString = MimeType.Application_Vnd_Ms_PowerPoint;
                break;
            case Extensions.Html:
                contentString = MimeType.Text_Html;
                break;
            case Extensions.Mov:
                contentString = MimeType.Video_QuickTime;
                break;
            case Extensions.Avi:
                contentString = MimeType.Video_X_MsVideo;
                break;
            case Extensions.Msg:
                contentString = MimeType.Application_Vnd_Ms_Outlook;
                break;
            case Extensions.eml:
                contentString = MimeType.Message_Rfc822;
                break;
            case Extensions.Mp3:
                contentString = MimeType.Audio_Mpeg;
                break;
            case Extensions.Mp4:
                contentString = MimeType.Video_Mp4;
                break;
            case Extensions.Tif:
            case Extensions.Tiff:
                contentString = MimeType.Image_Tiff;
                break;
            case Extensions.Wav:
                contentString = MimeType.Audio_Wav;
                break;
            case Extensions.Xml:
                contentString = MimeType.Application_Xml;
                break;
            case Extensions.Txt:
                contentString = MimeType.Text_Plain;
                break;
            case Extensions.M4a:
                contentString = MimeType.Audio_M4a;
                break;
            default:
                contentString = MimeType.Application_Octet_Stream;
                break;
        }
        return contentString;
    }
    //#endregion

    //#region Private static Methods

    //#endregion
}