import students from "../data/students.js";

const dataStudents = students

class StudentController{
    index(req,res){
        const data = {
            message:"Menampilkan data students",
            data: [...dataStudents]
        };
        res.json(data)
    }

    store(req,res){
        const {nama} = req.body;
        dataStudents.push(nama)
        const data = {
            message:`Menambahkan data student ${nama}`,
            data:[...dataStudents]
        };
        res.json(data)
    }

    update(req,res){
        const {id} = req.params;
        const {nama} = req.body;
        dataStudents[id] = nama;
        const data = {
            message:`Mengedit data student id: ${id}, nama: ${nama}`,
            data:[...dataStudents]
        };
        res.json(data)
    }

    destroy(req,res){
        const {id} = req.params;
        dataStudents.splice(id,1)
        const data = {
            message:`Menghapus data student ${id}`,
            data:[...dataStudents]
        };
        res.json(data)
    }
}

const object = new StudentController();

export default object;