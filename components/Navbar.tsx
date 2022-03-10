
import SelectCliente from './SelectCustomer';
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
            customerList={props.customerList}
            setCustomerName={props.setCustomerName}
            setCustomerID={props.setCustomerID}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="form-control">
          <SelectDomain
            customerDomainList={props.customerDomainList}
            setSelectedDomainID={props.setSelectedDomainID}
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;