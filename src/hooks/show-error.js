import { alertController } from '@ionic/vue';

export default function () {
    const handleAlert = (message, isError = false) => {
        alertController
            .create({
                header: isError ? "Error Message" : "Notice",
                message: message,
                buttons: ["OK"],
            })
            .then((t) => t.present());
    };

    return {
        handleAlert
    }
}