const types = await import('https://Lightning-Flow-Scanner.github.io/lightning-flow-scanner-core/types.d.ts');

export class CustomNamingConvention implements types.IRuleDefinition{

  name: string;
  label: string;
  description: string;
  type:string;
  supportedTypes:string[];
  isConfigurable: boolean;
  docRefs: any;

  constructor(){
    this.name = 'CustomNamingConvention';
    this.label = 'Custom Naming Convention';
    this.description='custom execute function ';
    this.type = 'flow';
    this.supportedTypes = types.FlowType.allTypes();
    isConfigurable: true;
  }

  public execute(flow: types.Flow, options?: { expression: string }): types.RuleResult {

    const conventionApplied = (flow.name)?.includes('_');
    return (!conventionApplied ?
      new types.RuleResult(this, [new types.ResultDetails(new types.FlowAttribute(flow.name, 'name', 'The Name needs to include a _'))]) :
      new types.RuleResult(this, []));
  }
}
