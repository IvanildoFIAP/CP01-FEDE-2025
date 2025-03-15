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
              <th>ID</th>
              <th>Produto</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {carrosData.map(function (item) {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.modelo}</td>
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