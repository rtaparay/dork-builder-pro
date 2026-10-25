import { Shield } from './Icons.jsx'

export default function LegalFoot({ tr }) {
  return (
    <div className="mt-2 p-4 border border-borderSoft rounded-xl bg-panel text-muted text-[0.78rem] leading-relaxed flex gap-3 items-start">
      <Shield className="w-[17px] h-[17px] flex-none text-warn mt-px" />
      <div>
        <span>{tr('Estas consultas solo exponen contenido que Google ya tiene indexado. ')}</span>
        <b className="text-fg font-semibold">{tr('Úsalas únicamente sobre dominios de tu propiedad o con autorización escrita')}</b>
        <span>{tr(' (pentest, bug bounty, auditoría). El acceso no autorizado a sistemas o datos ajenos es ilegal en la mayoría de jurisdicciones.')}</span>
      </div>
    </div>
  )
}
