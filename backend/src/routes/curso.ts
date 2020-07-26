import { Router } from 'express';
import { getCursos, registerCurso, getCursosAll, getCursoById } from '../controllers/curso';
import { verificaToken, verifyStudent } from '../middlewares/authentication';

export const curso_router : Router = Router();
curso_router.get('/cursos', verificaToken, verifyStudent, getCursos);
curso_router.put('/register-curso/:id', verificaToken, verifyStudent, registerCurso);
curso_router.get('/cursos-all', getCursosAll);
curso_router.get('/curso/:id', getCursoById);