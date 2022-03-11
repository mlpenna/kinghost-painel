import EmailTableEntry from './EmailTableEntry';


function EmailTable(props: any) {

  if (typeof props.domainEmailList === 'undefined' && Object.keys(props.domainEmaiList.body).length === 0 || props.domainEmailList.status != 'ok') {
    return (
      <div></div>
      // <div className="flex p-8 flex-col">
      //   <div className="normal-case ml-6 font-bold text-xl font-sans text-slate-600">Contas de E-mail</div>
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
              <th>Ativo</th>
              <th>Conta</th>
              <th>Quota</th>
              <th>Ocupado</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {
              props.domainEmailList.body.map((item: any, i: number) => {
                console.log(item)
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