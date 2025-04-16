import { connect } from 'mongoose';
import config from './app/config';
import app from './app';

const { mongo_uri, port } = config;
async function Main() {
    try {
        await connect(mongo_uri as string);

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log((error as Error).message);
        process.exit(1);
    }
}

Main();
