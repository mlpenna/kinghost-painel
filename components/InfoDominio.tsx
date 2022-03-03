function InfoDominio(props: any) {
    return (
        <>
            <div className="flex p-8 flex-col">
                <div className="normal-case ml-6 font-bold text-xl font-sans text-slate-600">Informações Domínio</div>
                <div className="grid grid-cols-5 gap-1 m-6">
                    <div className="">
                        <span className="mr-4 font-bold">Domínio:</span>
                        <span>pcptelecom.com.br</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Servidor:</span>
                        <span>web15f32</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Espaço FTP:</span>
                        <span>100</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Espaço Banco:</span>
                        <span>100</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Espaço E-mail:</span>
                        <span>300</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Criado Em:</span>
                        <span>28/02/2021</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Status:</span>
                        <span>Ativo</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Plano:</span>
                        <span>Hospedagem Básica</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoDominio;