export class DownloadHelper {

    //#region Private static Variables
    private static fileFormat: { pdf: string, xlsx: string } = {
        pdf: 'application/pdf',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    }
    //#endregion

    //#region Public static Methods
    public static downLoadExcelFile(data: any, fileName: string = ''): void {
        try {
            const blob = new Blob([data], { type: this.fileFormat.xlsx });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = (fileName ? fileName : 'fileDownlaod') + '_' + new Date().toLocaleDateString();
            link.click();
            // document.removeChild(link);
        } catch (error) {
            console.log('==========Excel download error=========')
            console.log(error)
        }

    }
}