import { useEffect, useState } from 'react';
import { computeOccupiedSpace } from '../lib/utils';
import EmailTableEntry from './EmailTableEntry';


function EmailTable({domainEmailList}: any) {

  const [occupiedSpace, setOccupiedSpace] = useState(0);

  useEffect(() => {
    computeOccupiedSpace(domainEmailList.body)
  }, [domainEmailList])
  

  if (typeof domainEmailList === 'undefined' && Object.keys(domainEmailList.body).length === 0 || domainEmailList.status != 'ok') {
    return (
      <div></div>
      // <div className="flex p-8 flex-col">
      //   <didomainEmailListv className="normal-case ml-6 font-bold text-xl font-sans text-slate-600">Contas de E-mail</div>
      // </div>
    )
  }

  return (
    <div className="flex p-8 flex-col">
      <div className="normal-case ml-6 font-bold text-xl font-sans text-slate-600">Contas de E-mail</div>
      <div className="overflow-x-auto">
        <table className="table m-2 table-compact w-full">
          <thead>

            <tr>
              <th>Ativo</th><th>Conta</th>
              <th>Quota</th>
              <th>Ocupado</th>
             
              <th>Conta</th><th>Conta</th>
              <th>Quota</th>
              <th>Ocupado</th>
             
              <th>Quota</th>
              <th>Ocupado</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {
              domainEmailList.body.map((item: any, i: number) => {
                // console.log(item)
                return (
                  <EmailTableEntry emailInfo={item} />
                )
              })
            }
            {/* <EmailTableEntry /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmailTable;