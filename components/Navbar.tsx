
import SelectCliente from './SelectCliente';
import SelectDomain from './SelectDomain';

function Navbar(props: any) {

  return (
    <div className="flex-1 navbar rounded-md">
      <div className="flex-1">
        <a className="normal-case text-xl">Painel de Controle</a>
      </div>
      <div className="flex-1">
        <a className="normal-case text-xl">{props.clienteNome}</a>
      </div>
      <div className="flex-1">
        <a className="normal-case text-xl">{props.clienteID}</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <SelectCliente
            clienteList={props.clienteList}
            setClienteNome={props.setClienteNome}
            setClienteID={props.setClienteID}
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <SelectDomain domainList={props.domainList} />
        </div>
      </div>
      <div className="flex-1">
      </div>
    </div>
  );
}
export default Navbar;