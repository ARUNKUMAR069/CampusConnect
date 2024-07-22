import configure from "../config/configure";
import { Client, Account, Databases, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    database;

    constructor() {
        this.client
            .setEndpoint(configure.appwriteProjectUrl)  // YOUR API ENDPOINT
            .setProject(configure.appwriteProjectId);   // YOUR PROJECT ID 

        this.account = new Account(this.client);
        this.database = new Databases(this.client);
    }

    // CREATE ACCOUNT
    async createAccount({
        email,
        password,
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
        studentState,
        studentDistrict,
        studentTown,
        studentAdress,
        studentPicture
    }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(), // Generates a unique ID for the user
                email,
                password,
                name
            );

            if (userAccount) {
                // Store additional user information in a database or collection
                await this.database.createDocument(
                    configure.appwriteDatabaseId,
                    configure.appwriteCollectionId,
                    ID.unique(),
                    {
                        userId: userAccount.$id,
                        email,
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
                        studentState,
                        studentDistrict,
                        studentTown,
                        studentAdress,
                        studentPicture
                    }
                );

                return this.userLogin(email, password);
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // LOGIN 
    async userLogin(email, password) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // LOGOUT
    async userLogout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    // USER CURRENT STATUS
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("APPWRITE SERVICE :: getCurrentUser :: error", error);
            return null;
        }
    }
}

const authService = new AuthService();

export default authService;
