/// <reference types="next" />
/// <reference types="next/types/global" />
declare type GlobalFetch = WindowOrWorkerGlobalScope
((global as unknown) as { FormData: unknown }).FormData = class FormData {};
declare var FormData = class FormData{};
(global as any).FormData = FormData;
