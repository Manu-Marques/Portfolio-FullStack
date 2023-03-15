import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import experiences from './data/experiences.json' assert { type: 'json' };
import formations from './data/formations.json' assert { type: 'json' };
import projects from './data/projects.json' assert { type: 'json' };
import skills from './data/skills.json' assert { type: 'json' };
import presentation from './data/presentation.json' assert { type: 'json' };

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


 app.get('/experiences', (req, res) => {
    res.send(experiences);
 });

app.get('/skills', (req, res) => {
    res.send(skills);
});

app.get('/formations', (req, res) => {
    res.send(formations);
});

app.get('/projects', (req, res) => {
    res.send(projects);
    console.log(projects);
});

app.get('/presentation', (req, res) => {
    res.send(presentation);
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

