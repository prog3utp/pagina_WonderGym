import httpClient from "./httpClient";

const END_POINT = "/api/trainers";

const getAllTrainers = () => httpClient.get(END_POINT);

const getTrainer = (code) => httpClient.get(END_POINT + "/" + code);

const createTrainer = (trainer) => httpClient.post(END_POINT, trainer);

const createTrainerWithImage = (trainer) => httpClient.post(END_POINT, trainer, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

const updateTrainer = (code, trainer) => httpClient.put(END_POINT + "/" + code, trainer);

const updateTrainerImage = (code, formdata) => httpClient.patch(END_POINT + "/" + code + "/image", formdata, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

const deleteTrainer = (code) => httpClient.delete(END_POINT + "/" + code);

export {
    getAllTrainers,
    getTrainer,
    createTrainer,
    createTrainerWithImage,
    updateTrainer,
    updateTrainerImage,
    deleteTrainer
}