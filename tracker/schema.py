import graphene
from tracker import queries, mutations
from graphene_django_extras import all_directives

schema = graphene.Schema(query=queries.Query, mutation=mutations.Mutation, directives=all_directives)