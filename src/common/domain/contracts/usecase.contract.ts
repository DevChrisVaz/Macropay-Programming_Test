export abstract class UseCase<Params, Response> {
    abstract run(params: Params): Response;
}