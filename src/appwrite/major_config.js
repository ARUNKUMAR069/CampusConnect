import configure from "../config/configure";
import { Client, ID, Databases, Storage, Query } from "appwrite";
export class Service {
    client = new Client();
    databases;
    storage;
    constructor() {

        this.client
            .setEndpoint(configure.appwriteProjectUrl)
            .setProject(configure.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    // CREATE YOUR STUDENT CARD
    async createCard(

        {
            id,
            name,
            institute,
            course,
            studentClass,
            section,
            rollNo,
            semester,
            startingYear,
            endingYear,
            motherName,
            fatherName,
            studentPhone,
            parentsPhone,
            birth,
            studentAdress,
            studentPicture
        }) {
        try {

            return await this.databases.createDocument(
                configure.appwriteDatabaseId,
                configure.appwriteCollectionId,
                id.unique(),
                {

                    name,
                    institute,
                    course,
                    studentClass,
                    section,
                    rollNo,
                    semester,
                    startingYear,
                    endingYear,
                    motherName,
                    fatherName,
                    studentPhone,
                    parentsPhone,
                    birth,
                    studentAdress,
                    studentPicture

                }
            )


        } catch (error) {
            throw error
        }


    }


    async updateCard(
        id,
        {
            name,
            institute,
            course,
            studentClass,
            section,
            rollNo,
            semester,
            startingYear,
            endingYear,
            motherName,
            fatherName,
            studentPhone,
            parentsPhone,
            birth,
            studentAdress,
            studentPicture
        }) {
        try {
            return this.databases.updateDocument(
                configure.appwriteDatabaseId,
                configure.appwriteCollectionId,
                id,
                {
                    name,
                    institute,
                    course,
                    studentClass,
                    section,
                    rollNo,
                    semester,
                    startingYear,
                    endingYear,
                    motherName,
                    fatherName,
                    studentPhone,
                    parentsPhone,
                    birth,
                    studentAdress,
                    studentPicture
                }
            )

        } catch (error) {
            throw error
        }

    }
    async deleteCard(id) {
        try {
            await this.databases.deleteDocument(
                configure.appwriteDatabaseId,
                configure.appwriteCollectionId,
                id,
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getCard(id) {
        try {
            await this.databases.getDocument(
                configure.appwriteDatabaseId,
                configure.appwriteCollectionId,
                id,
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }
    // FILE SERVICE
    async uploadFile(file) {


        try {
            return await this.storage.createFile(
                configure.appwriteBucketId,
                ID.unique(),
                file

            )

        } catch (error) {
            throw error
            return false
        }





    }

    async delteFile(fileId) {
        return await this.storage.deleteFile(
            configure.appwriteBucketId,
            fileId
        )
        try {

        } catch (error) {
            throw error
            return false
        }
    }






}

const service = new Service
export default service