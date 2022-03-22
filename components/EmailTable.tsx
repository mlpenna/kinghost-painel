import { useEffect, useState } from 'react';
import { computeOccupiedSpace } from '../lib/utils';
import EmailTableEntry from './EmailTableEntry';


function EmailTable({ domainEmailList, domainEmailQuota }: any) {

  const [occupiedSpace, setOccupiedSpace] = useState(0);

  useEffect(() => {
    if (domainEmailList !== undefined) {
      setOccupiedSpace(parseInt(computeOccupiedSpace(domainEmailList.body)));
    }
  }, [domainEmailList])


  if (domainEmailList === undefined && Object.keys(domainEmailList.body).length === 0 || domainEmailList.status != 'ok') {
    return (
      <div></div>
    )
  }

  return (
    <div className="flex p-8 flex-col">
      <div className="normal-case ml-3 font-bold text-xl font-sans text-slate-600">Contas de E-mail</div>
      <div className="normal-case ml-3 text-m font-sans text-slate-500">Espaço disponivel para e-mails: {parseInt(domainEmailQuota) - occupiedSpace + " MB"}</div>
      <div className="overflow-x-visible">
        <table className="table m-2 table-compact w-full">
          <thead>
            <tr>
              <th>Ativo</th><th>Conta</th>
              <th>Quota</th>
              <th>Ocupado</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {
              domainEmailList.body.map((item: any, i: number) => {
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