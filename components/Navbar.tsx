
import SelectCliente from './SelectCliente';
import SelectDomain from './SelectDomain';

function Navbar(props: any) {

  return (
    <div className="flex navbar gap-2 justify-around items-end shadow-md shadow-slate-300">
      <div className="flex-1">
        <a className="normal-case font-bold text-3xl font-sans text-slate-600">Painel de Controle</a>
      </div>
      <div className="flex-1">
        <div className="form-control">
          <SelectCliente
            clienteList={props.clienteList}
            setClienteNome={props.setClienteNome}
            setClienteID={props.setClienteID}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="form-control">
          <SelectDomain domainList={props.domainList} />
        </div>
      </div>
    </div>
  );
}
export default Navbar;