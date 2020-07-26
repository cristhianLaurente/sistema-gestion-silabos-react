import { Request, Response } from 'express';
import { startSession } from 'mongoose';
import { cursoModel, silaboModel } from '../db/mongoose';

interface iSilabo{
    title: String,
    year: String,
    semestre: String,
    pdfname: String,
    pdfurl: String
}

const silaboPdfCurso = async (objectSilabo: iSilabo, objectCurso: object, user: any) => {

    const session = await startSession();
    session.startTransaction();
    try {
        const opts = { session };

        await silaboModel.createCollection();
        await cursoModel.createCollection();

        
        let objectSilabos = new silaboModel({
            title: objectSilabo.title,
            year: objectSilabo.year,
            semestre: objectSilabo.semestre,
            pdfname: objectSilabo.pdfname,
            pdfurl: objectSilabo.pdfurl,
            user
        })

        let silabo = await objectSilabos.save(opts);

        let objectCursos = new cursoModel({
            name: objectCurso.name,
            teacher: user,
            silabo: silabo._id
        });
    
        let curso = await objectCursos.save(opts);
  

        await session.commitTransaction();
        session.endSession();
    
        return curso

    } catch( err ) {
        await session.abortTransaction();
        session.endSession();
        throw err        
    }   
}


export const addNewCurso = (req: Request, res: Response) => {
    let {body, query} = req;

    silaboPdfCurso(body.objectSilabo, body.objectCurso, query.user._id)
    .then((response) => {
        res.status(201).json({
            data: response
        })
    })
    .catch(err => {
        res.status(400).json({
            error: {
                message: err.message
            }
        })   
    })

}



// const addSilaboOnCurso = async(silabos: iSilabo, id: any) => {
//     const session = await startSession();
//     session.startTransaction();
//     try {
//         const opts = { session };
//         cursoModel.createCollection();
//         silaboModel.createCollection();

//         let objectSilabo = new silaboModel({
//             title: silabos.title,
//             year: silabos.year,
//             semestre: silabos.semestre,
//             pdfname: silabos.pdfname,
//             pdfurl: silabos.pdfurl,
//             user: id
//         })

//         let silabo = await objectSilabo.save(opts);

//         console.log(silabo._id) // qw25e1432rt1dfg47s6asg4h4b

//         let silaboañadido = {silabo:":b :v como le hago el push ahora :' )"}
//         let options = {
//             new: true,
//             session
//         }
//         cursoModel.findOneAndUpdate(id, silaboañadido , options, () => {})


//         await session.commitTransaction();
//         session.endSession();

//         return 'uk'

//     }catch( err ) {
//         await session.abortTransaction();
//         session.endSession();
//         throw err        
//     } 
// }


