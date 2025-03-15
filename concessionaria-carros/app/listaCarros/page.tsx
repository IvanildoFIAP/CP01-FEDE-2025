import React from 'react';
import Link from 'next/link';
import { carrosData } from '@/data/carrosData';

export default function listaCarro() {
  return (
    <div>
      <h1>Lista de Veículos</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Foto do veículo</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {carrosData.map(function (item) {
              return (
                <tr key={item.id}>
                  <td><img src={item?.foto} alt={`${item?.modelo}`} /></td>
                  <td>{item.modelo}</td>
                  <td>{item.ano}</td>
                  <td>
                    <Link href={'/detalhesVeiculo/' + item.id}>
                      Ver Detalhes
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}