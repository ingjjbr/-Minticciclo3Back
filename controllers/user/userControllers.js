import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

const getAllUsers = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuario').find().limit(50).toArray(callback);
};

const createUser = async (datosUsuario, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuario').insertOne(datosUsuario, callback);
};

const editUser = async (usuarioId, data, callback) => {
  const filtroUsuario = { _id: new ObjectId(usuarioId) };
  const operacion = {
    $set: data,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('usuario')
    .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteUser = async (usuarioId, callback) => {
  const filtroUsuario = { _id: new ObjectId(usuarioId) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuario').deleteOne(filtroUsuario, callback);
};

export { getAllUsers, createUser, editUser, deleteUser };