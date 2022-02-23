
function Navbar() {
  return (
    <div className="flex-1 navbar bg-base-300 rounded-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Painel de Controle</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;